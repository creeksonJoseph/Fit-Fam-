#!/usr/bin/env python3
import os
from models import db, User
from app import create_app

def set_admin_role():
    app = create_app()
    
    with app.app_context():
        # Find user by email
        admin_email = "charanajoseph@gmail.com"
        user = User.query.filter_by(email=admin_email).first()
        
        if user:
            user.is_admin = True
            db.session.commit()
            print(f"✅ Admin role granted to {admin_email}")
        else:
            print(f"❌ User with email {admin_email} not found")

if __name__ == "__main__":
    set_admin_role()