# Generated by Django 3.1.4 on 2020-12-30 22:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0050_auto_20201227_1652'),
    ]

    operations = [
        migrations.AlterField(
            model_name='finalcsv',
            name='buy_value',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='net_inst_by_date',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='net_inst_value',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='sell_value',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='top10_buys',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='top10_inst',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='top10_sells',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='wealth_graph',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='portfoliostats',
            name='execute_portfolio',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='portfoliostats',
            name='portfolio_constituents',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='portfoliostats',
            name='portfolio_wealth_graph',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='tdstate',
            name='td_state',
            field=models.JSONField(null=True),
        ),
    ]
