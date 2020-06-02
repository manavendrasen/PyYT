from pytube import Playlist, YouTube

link = "https://www.youtube.com/playlist?list=PLUQ0yHXLtSQzBdCqw-2pD8Q41ebi_r-81"

pl = Playlist(link)
print(pl)
videos = pl.videos

for vid in videos:
    yt = vid.streams.first().download()
