# Generated by Django 5.0.6 on 2024-06-23 21:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_tag_posttag'),
    ]

    operations = [
        migrations.DeleteModel(
            name='PostTag',
        ),
    ]
