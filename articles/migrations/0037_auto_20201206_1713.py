# Generated by Django 3.1.4 on 2020-12-06 17:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('articles', '0036_auto_20201206_1647'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='portfolio',
            name='token',
        ),
        migrations.AddField(
            model_name='portfolio',
            name='user',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, related_name='user', to='auth.user'),
            preserve_default=False,
        ),
    ]