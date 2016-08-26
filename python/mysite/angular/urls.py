from django.conf.urls import url

from . import views,lessons

urlpatterns = [
    url(r'^$', views.home, name='home'),
    # ex: /angular/5/
    url(r'^employee/$', views.index, name='index'),
    # ex: /angular/5/results/
    url(r'^(?P<employee_id>[0-9]+)/edit/$', views.edit, name='edit'),
    # ex: /angular/5/vote/
    url(r'^(?P<employee_id>[0-9]+)/delete/$', views.delete, name='delete'),
    #update
    url(r'^update/$', views.update, name='update'),
     url(r'^add/$', views.add, name='add'),
	# Notes
    url(r'^index/lessons/$', lessons.index, name='index'),
    url(r'^syntax/lessons/$', lessons.syntax, name='index'),
    url(r'^django/lessons/$', lessons.django, name='django'),
	url(r'^firstview/lessons/$', lessons.first, name='first'),
]