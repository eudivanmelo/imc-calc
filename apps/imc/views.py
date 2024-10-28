from django.shortcuts import render

def home_page(request):
    return render(request, 'home.html')

def imc_page(request):
    return render(request, 'imc.html')
