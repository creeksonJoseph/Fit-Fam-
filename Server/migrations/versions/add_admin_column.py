"""Add is_admin column to users

Revision ID: add_admin_001
Revises: 
Create Date: 2025-01-06 12:00:00.000000

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers
revision = 'add_admin_001'
down_revision = None
depends_on = None

def upgrade():
    # Add is_admin column to users table
    op.add_column('users', sa.Column('is_admin', sa.Boolean(), nullable=False, server_default='false'))

def downgrade():
    # Remove is_admin column from users table
    op.drop_column('users', 'is_admin')