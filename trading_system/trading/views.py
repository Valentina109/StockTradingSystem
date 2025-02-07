from rest_framework import viewsets
from .models import TradingStrategy
from .serializers import TradingStrategySerializer


class TradingStrategyViewSet(viewsets.ModelViewSet):
    queryset = TradingStrategy.objects.all()
    serializer_class = TradingStrategySerializer


from django.shortcuts import render

# Create your views here.
