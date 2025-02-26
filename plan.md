## Playlist generator

The goal of this app is to be able to find past concerts and generate a playlist on spotify based on the songs played on that concert. The goal will be to fetch the concert information from setlist.fm and apply the songs of a specific concert to a spotify playlist.

## Features to consider

- Learning how to use the setlist.fm API to fetch the required information
- How to integrate spotify? Am I creating a new playlist of just queuing the songs?
- If it's a playlist, is it being saved under the user's spotify profile or maybe under the app's profile?

## User Stories

- As a user, I can look up concerts based on an artist (Band or singer)
- As a user, I can generate a playlist or queue the songs of any concert that I can find on Setlist.fm
- As a user, I can save the searchs I did

## DB planning
A better understanding of setlist.fm API will help figure out what need to be kept in the database

# Users
- id
- username
- email
- password

# Playlists
- id
- artist
- venue
- date
- location
- user_id (FK) - Maybe not needed 

# Songs
- id
- playlist_id (FK)
- artist
- name
- album
- year


