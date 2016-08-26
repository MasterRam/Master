# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('angular', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='address',
            old_name='question',
            new_name='employee',
        ),
    ]
