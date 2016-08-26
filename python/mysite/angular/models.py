import datetime
from django.db import models
from django.utils import timezone

# Create your models here.
class Employee(models.Model):
   name= models.CharField(max_length=200)
   age = models.IntegerField(default=0) #models.DateTimeField('date published')
   job_title= models.CharField(max_length=200)
   join_date=models.DateTimeField('date of join')
   
#    def __str__(self):
#         return self.name
        
   def is_recently_joined(self):
        return self.join_date >= timezone.now() - datetime.timedelta(days=1)
        
class Address(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    address = models.CharField(max_length=300)
    mobile = models.CharField(max_length=100)
    
    def __str__(self):
            return self.address
