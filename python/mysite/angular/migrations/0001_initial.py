# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('address', models.CharField(max_length=300)),
                ('mobile', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=200)),
                ('age', models.IntegerField(default=0)),
                ('job_title', models.CharField(max_length=200)),
                ('join_date', models.DateTimeField(verbose_name=b'date of join')),
            ],
        ),
        migrations.AddField(
            model_name='address',
            name='question',
            field=models.ForeignKey(to='angular.Employee'),
        ),
    ]
