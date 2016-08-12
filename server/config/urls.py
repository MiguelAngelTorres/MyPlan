from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^', include('retail.urls')),
		url(r'^admin/', include(admin.site.urls)),
    url(r'^accounts/', include('allauth.urls'))

]
