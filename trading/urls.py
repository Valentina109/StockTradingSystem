# trading/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TradingStrategyViewSet

router = DefaultRouter()
router.register(r'strategies', TradingStrategyViewSet)

urlpatterns = [
    path('', include(router.urls)),

]
