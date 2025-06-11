from rest_framework import serializers
from .models import Song, Playlist, Member

class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = '__all__'

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

class PlaylistSerializer(serializers.ModelSerializer):
    songs = SongSerializer(many=True, read_only=True)
    members = MemberSerializer(many=True, read_only=True)
    class Meta:
        model = Playlist
        fields = '__all__'

