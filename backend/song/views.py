from django.shortcuts import render
from googleapiclient.discovery import build
from rest_framework import viewsets
from .models import Song, Playlist, Member
from .serializers import SongSerializer, MemberSerializer, PlaylistSerializer
apikey = ""

def fetchsong(url):
    songid = url.split("v=")[-1]
    youtube = build('youtube', 'v3', developerKey=apikey)
    request = youtube.videos().list(
        part="snippet,contentDetails",
        id=songid
    )
    response = request.execute()
    if response["items"]:
        item = response["items"][0]
        title = item["snippet"]["title"]
        channel = item["snippet"]["channelTitle"]
        thumbnail = item["snippet"]["thumbnails"]["high"]["url"]
        return {
        "title": title,
        "author": channel,
        "thumbnail": thumbnail
        }
    else:
        return None


# Create your views here.

class PLaylistViewSet(viewsets.ModelViewSet):
    queryset = Playlist.objects.all()
    serializer_class = PlaylistSerializer

class SongViewSet(viewsets.ModelViewSet):
    queryset = Song.objects.all()
    serializer_class = SongSerializer

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer