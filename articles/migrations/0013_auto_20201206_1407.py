# Generated by Django 3.1.4 on 2020-12-06 14:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('articles', '0012_remove_portfolio_token'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolio',
            name='user',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, related_name='user', to='auth.user'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='buy_value',
            field=models.JSONField(null=True),
        ),
    ]
