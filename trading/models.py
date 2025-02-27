from django.db import models
from django.conf import settings


class TradingStrategy(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('paused', 'Paused'),
        ('archived', 'Archived'),
    ]
    name = models.CharField(max_length=100)
    description = models.TextField()
    parameters = models.JSONField(default=dict)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')
    profit = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    loss = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    win_rate = models.FloatField(default=0)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


