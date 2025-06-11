from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SongViewSet, PLaylistViewSet, MemberViewSet

router = DefaultRouter()
router.register('playlists', PLaylistViewSet)
router.register('songs', SongViewSet)
router.register('members', MemberViewSet)

urlpatterns = [
    path('', include(router.urls)),
]