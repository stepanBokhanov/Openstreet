# Generated by Django 3.1.4 on 2020-12-06 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0028_auto_20201206_1439'),
    ]

    operations = [
        migrations.AlterField(
            model_name='finalcsv',
            name='net_inst_by_date',
            field=models.CharField(default=1, max_length=1000),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='net_inst_value',
            field=models.CharField(default=1, max_length=1000),
            preserve_default=False,
        ),
    ]
