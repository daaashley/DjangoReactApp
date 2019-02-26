from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter()
# API Endpoint
router.register('api/leads',LeadViewSet,'leads')

# Gives us urls that we register
urlpatterns = router.urls