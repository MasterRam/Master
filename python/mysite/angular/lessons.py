from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect,csrf_exempt
# Create your views here.
from django.http import HttpResponse
from django.template import loader
import datetime



@csrf_protect
def index(request):
    template = loader.get_template('angular/lessons/introduction.html')
    return HttpResponse(template.render(request))
    
def syntax(request):
    template = loader.get_template('angular/lessons/syntax.html')
    return HttpResponse(template.render(request))
    
def django(request):
    template = loader.get_template('angular/lessons/django.html')
    return HttpResponse(template.render(request))
   
def first(request):
    template = loader.get_template('angular/lessons/first_view.html')
    return HttpResponse(template.render(request))
   