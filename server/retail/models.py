# curl -X POST -d "client_id=2YHrtrPOvQldDBblYqkMzVQkfBWhStpeCIkbOcLK&client_secret=nj8LrmFRov7NxJFis6PSXYFi6oKS3j4WxzqSJNPXy9msA3nfkVq0lfWuzcvD0vRTcyZZo6DUTLCzNcWiCobgEvfQEyzmuiHSu1XMvOIINzxzq6pJqmSz5j0UZhdeBR2C&grant_type=password&username=admin&password=2764lqnmnhmf" http://localhost:8000/auth/token

# curl -X POST -d "grant_type=convert_token&client_id=2YHrtrPOvQldDBblYqkMzVQkfBWhStpeCIkbOcLK&client_secret=nj8LrmFRov7NxJFis6PSXYFi6oKS3j4WxzqSJNPXy9msA3nfkVq0lfWuzcvD0vRTcyZZo6DUTLCzNcWiCobgEvfQEyzmuiHSu1XMvOIINzxzq6pJqmSz5j0UZhdeBR2C&backend=facebook&token=Jyw7l0kf4mhom4CEUIdchTr6rEXhej" http://localhost:8000/auth/convert-token

from __future__ import unicode_literals

from django.db import models

# Create your models here.
KIND_CHOICES = (
        ('Sp', 'Sports'),
        ('Cu', 'Culture'),
				('Mu', 'Music'),
        ('Fo', 'Food'),
				('Sh', 'Shopping'),
        ('Le', 'Leisure'),
    )


class Publics(models.Model):
    owner = models.ForeignKey('auth.User', related_name='publics')
    begin = models.DateTimeField()
    end = models.DateTimeField()
    title = models.CharField(max_length=100)
    description = models.TextField()
    photo = models.ImageField(upload_to='Images/',default='Images/None/No-img.jpg')



    lat = models.DecimalField(max_digits=16,decimal_places=13)
    lon = models.DecimalField(max_digits=16,decimal_places=13)
    kind = models.CharField(max_length=2, choices=KIND_CHOICES)


    def save(self, *args, **kwargs):
		  super(Publics, self).save(*args, **kwargs)


