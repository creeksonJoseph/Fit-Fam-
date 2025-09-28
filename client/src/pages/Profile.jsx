import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AppHeader from "../components/AppHeader";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const BASE_URL = "http://127.0.0.1:5000";
  const userId = 1;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users`);
        const users = await response.json();
        const currentUser = users.find((user) => user.id === userId);

        if (currentUser) {
          setUsername(currentUser.username);
          setEmail(currentUser.email);
          setProfileImage(currentUser.profile_image || "");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleSaveUsername = async () => {
    try {
      await fetch(`${BASE_URL}/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });
      setIsEditingUsername(false);
    } catch (error) {
      console.error("Error updating username:", error);
    }
  };

  const handleSaveEmail = async () => {
    try {
      await fetch(`${BASE_URL}/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setIsEditingEmail(false);
    } catch (error) {
      console.error("Error updating email:", error);
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    console.log("File selected:", file);

    if (!file) {
      console.log("No file selected");
      return;
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      console.log("Invalid file type:", file.type);
      alert("Please select an image file");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      console.log("File too large:", file.size, "bytes");
      alert("File size must be less than 5MB");
      return;
    }

    console.log("File validation passed, starting upload...");
    setUploading(true);

    try {
      // Create FormData for Cloudinary upload
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Fitfam");
      formData.append("cloud_name", "dzgwtssxv");

      console.log("FormData created, uploading to Cloudinary...");
      console.log(
        "Upload URL:",
        "https://api.cloudinary.com/v1_1/dzgwtssxv/image/upload"
      );
      console.log("Upload preset:", "Fitfam");
      console.log("Cloud name:", "dzgwtssxv");

      // Upload to Cloudinary
      const cloudinaryResponse = await fetch(
        "https://api.cloudinary.com/v1_1/dzgwtssxv/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      console.log("Cloudinary response status:", cloudinaryResponse.status);
      console.log("Cloudinary response ok:", cloudinaryResponse.ok);

      if (!cloudinaryResponse.ok) {
        const errorText = await cloudinaryResponse.text();
        console.error("Cloudinary upload failed:", errorText);
        throw new Error(
          `Cloudinary upload failed: ${cloudinaryResponse.status} - ${errorText}`
        );
      }

      const cloudinaryData = await cloudinaryResponse.json();
      console.log("Cloudinary response data:", cloudinaryData);

      const imageUrl = cloudinaryData.secure_url;
      console.log("Image URL from Cloudinary:", imageUrl);

      // Update user profile with new image URL
      console.log("Updating user profile with new image URL...");
      const updateResponse = await fetch(`${BASE_URL}/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profile_image: imageUrl }),
      });

      console.log("Profile update response status:", updateResponse.status);
      console.log("Profile update response ok:", updateResponse.ok);

      if (updateResponse.ok) {
        const updatedUser = await updateResponse.json();
        console.log("Profile updated successfully:", updatedUser);
        setProfileImage(imageUrl);
        alert("Profile image updated successfully!");
      } else {
        const errorText = await updateResponse.text();
        console.error("Profile update failed:", errorText);
        throw new Error(
          `Profile update failed: ${updateResponse.status} - ${errorText}`
        );
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
        name: error.name,
      });
      alert(`Failed to upload image: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-background-light font-display">
        <AppHeader />
        <div className="flex min-h-screen">
          <Sidebar activeTab="settings" />
          <main className="flex-1 flex items-center justify-center lg:ml-80">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light font-display">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="settings" />
        <main className="flex-1 p-6 pb-24 lg:pb-8 lg:ml-80">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-background-dark mb-6">
              Profile
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div
                      className="w-16 h-16 bg-center bg-no-repeat bg-cover rounded-full bg-gray-200"
                      style={{
                        backgroundImage: profileImage
                          ? `url("${profileImage}")`
                          : 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7qdqiXNj1XEs9_QdNO92DnYy0gUDZ7UMtbFKUQaPluA924iAHM_-aPBRCP-eFe2LWZxAMJ6sNM5HxvlOMZQSiYL7OAN6BiJphg6V7PDaM5fsW8RyKMWHk5luw4NNeufjKmaygCDCYKxdygTuOZMwVEKkkOnjabXYKbDwFGW-dyRfnLyfFY8OMJuQN-H_7czKkwH7z_GukThlP0g8YRJKzS9dZ_SdRYEdGW0XJX__0Z5EzSakZsz8cmYH0llVIYab2H0a2RV1vNsyl")',
                      }}
                    ></div>
                    <label className="absolute bottom-0 right-0 bg-primary text-background-dark p-1.5 rounded-full hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        disabled={uploading}
                      />
                      {uploading ? (
                        <div className="w-3 h-3 border-2 border-background-dark border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <svg
                          fill="currentColor"
                          height="12"
                          viewBox="0 0 256 256"
                          width="12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l22.63-22.62L214.63,86.05Z"></path>
                        </svg>
                      )}
                    </label>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-background-dark">
                      {username}
                    </h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      className="block text-sm font-medium text-background-dark/70"
                      htmlFor="username"
                    >
                      Change Username
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="flex-grow">
                        <input
                          className="block w-full bg-gray-50 border border-gray-200 rounded-lg h-10 px-3 text-background-dark focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                          disabled={!isEditingUsername}
                          id="username"
                          name="username"
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <button
                        className="p-2 rounded-lg bg-gray-100 text-background-dark hover:bg-primary/20"
                        onClick={() => setIsEditingUsername(!isEditingUsername)}
                      >
                        <svg
                          fill="currentColor"
                          height="16"
                          viewBox="0 0 256 256"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l22.63-22.62L214.63,86.05Z"></path>
                        </svg>
                      </button>
                      <button
                        onClick={handleSaveUsername}
                        className="px-3 py-2 rounded-lg bg-primary text-background-dark font-medium hover:bg-primary/80 text-sm"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="block text-sm font-medium text-background-dark/70"
                      htmlFor="email"
                    >
                      Change Email
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="flex-grow">
                        <input
                          className="block w-full bg-gray-50 border border-gray-200 rounded-lg h-10 px-3 text-background-dark focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                          disabled={!isEditingEmail}
                          id="email"
                          name="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <button
                        className="p-2 rounded-lg bg-gray-100 text-background-dark hover:bg-primary/20"
                        onClick={() => setIsEditingEmail(!isEditingEmail)}
                      >
                        <svg
                          fill="currentColor"
                          height="16"
                          viewBox="0 0 256 256"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l22.63-22.62L214.63,86.05Z"></path>
                        </svg>
                      </button>
                      <button
                        onClick={handleSaveEmail}
                        className="px-3 py-2 rounded-lg bg-primary text-background-dark font-medium hover:bg-primary/80 text-sm"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => navigate("/login")}
                  className="lg:hidden px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors text-sm"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
