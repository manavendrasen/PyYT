from pytube import YouTube

print("Connecting to youtube ...")
# link = "https://www.youtube.com/playlist?list=PLUQ0yHXLtSQzBdCqw-2pD8Q41ebi_r-81"
link = input()
location = input()

yt = YouTube(link)
print(yt.title + " " + location)
# pl = Playlist(link)

# videos = pl.videos

# for vid in videos:
#     print(vid.title)
#     # yt = vid.streams.first().download()
