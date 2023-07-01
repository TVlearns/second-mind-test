"""Added tablename

Revision ID: 8c6a4f6fe5ab
Revises: aef53b0e90b6
Create Date: 2023-06-20 11:25:24.815702

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8c6a4f6fe5ab'
down_revision = 'aef53b0e90b6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('task', schema=None) as batch_op:
        batch_op.drop_column('category')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('task', schema=None) as batch_op:
        batch_op.add_column(sa.Column('category', sa.VARCHAR(length=100), nullable=True))

    # ### end Alembic commands ###