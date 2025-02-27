from rest_framework import serializers
from .models import TradingStrategy

class TradingStrategySerializer(serializers.ModelSerializer):
    class Meta:
        model = TradingStrategy
        fields = '__all__'