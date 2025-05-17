from django.db import models
import uuid
# Create your models here.
class Playlist(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=10, unique=True, editable=False)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.code:
            self.code = uuid.uuid4().hex[:8].upper()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
    
################################################

class Member(models.Model):
    name = models.CharField(max_length=100)
    playlist = models.ForeignKey(Playlist, related_name='members', on_delete=models.CASCADE)

    class Meta:
        unique_together = ('name', 'playlist')
    def __str__(self):
        return self.name

################################################

class Song(models.Model):
    playlist = models.ForeignKey(Playlist, related_name='songs', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    songid = models.CharField(max_length=100)
    added_by = models.CharField(max_length=100)
    author = models.CharField(max_length=100)

    class Meta:
        unique_together = ('title', 'author', 'playlist')
    def geturl(self):
        return f"https://www.youtube.com/watch?v={self.songid}"
    def __str__(self):
        return f"{self.title} by {self.artist}"