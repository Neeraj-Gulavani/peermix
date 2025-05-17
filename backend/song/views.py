from django.shortcuts import render
from googleapiclient.discovery import build

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
