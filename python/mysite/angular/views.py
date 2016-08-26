from django.shortcuts import render
from django.utils import timezone
from django.views.decorators.csrf import csrf_protect,csrf_exempt
# Create your views here.
from django.shortcuts import redirect
from django.http import HttpResponse
from django.template import loader
import datetime
from .models import Employee,Address
from querystring_parser import parser
import json
@csrf_protect
def index(request):
    recent_employee_list = Employee.objects.order_by('-join_date')[:50]
    # output = ', '.join([q.name for q in recent_employee_list])
    print len(recent_employee_list)
    template = loader.get_template('angular/list.html')
    context = {
        'recent_employee_list': recent_employee_list,
    }
    return HttpResponse(template.render(context, request))
    # now = datetime.datetime.now()
    # html = "<html><body>It is now %s.</body></html>" % now
    # return HttpResponse(html)
    
def lists(request, employee_id):
    return HttpResponse("You're looking for employee %s." % employee_id)

def edit(request, employee_id):
    template = loader.get_template('angular/edit.html')
    employees=Employee.objects.all().filter(pk=employee_id)
    if len(employees) > 0:
        emp=employees[0]
    else:
        emp = {'id':employee_id,'name':"",'age':0,'job_title':'','join_date':timezone.now()}
    return HttpResponse(template.render({ 'employee':emp}, request))

def delete(request, employee_id):
    deleted=Employee.objects.filter(pk=employee_id).delete()
    print deleted;
    return redirect('/')
 
def home(request):
    template = loader.get_template('angular/home.html')
    return HttpResponse(template.render(request))  
@csrf_exempt
def update(request):
 
  p = parser.parse(request.POST.urlencode())
  id= int(p['id'])
  age=int(p['age'])
  name=p['name']
  job_title=p['job_title']
  print 'Id after Int parsed:'
  print id
  Employee.objects.all().filter(pk=id).update(name=name,job_title=job_title,age=age)
  return HttpResponse(json.dumps({'name': name}), content_type="application/json")
  #.update(val=F('val') + 1)
  #for key,track in tracks
@csrf_exempt
def add(request):
  p = parser.parse(request.POST.urlencode())
  id= int(p['id'])
  age=int(p['age'])
  name=p['name']
  job_title=p['job_title']
  new=Employee(name=name,job_title=job_title,join_date=timezone.now(),age=age)
  new.save()
  print new
  return HttpResponse(json.dumps({'name': name}), content_type="application/json")