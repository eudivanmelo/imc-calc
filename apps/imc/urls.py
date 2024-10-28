from django.urls import path
from .views import home_page, imc_page

urlpatterns = [
    path('', home_page, name='home'),
    path('imc/', imc_page, name='imc'),
]