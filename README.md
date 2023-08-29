# MixTune-Jamboree-DJ-Groove-Arranger
Playlist editing app with useful features for DJs using Spotify integration
 - BPM and Key shown for each track
 - Easy to use UI for organizing playlist
 - Playlist exporting functionality

## App should be accessible on url : 
https://mixtunejamboree-app.netlify.app/

## otherwise, launch frontend locally using dockerfile inside the frontend folder

oauth interaction [X]
display a list [X]
typescript flexing [X]
css flexing [X]
basic functionality
    show key and bpm on each song []
    show playlist image and description []
    load playlist fully []
    save playlist to spotify []
    add a song []
    export to file []
UI/UX []
    navbar/multiple page navigation []
    logout []
    loading and error handling everywhere []->find a way to make it global ?
clean code flexing : 
    clean reactive state management using reactive programming []
    state is extracted into service
    components notify services through events
    component state uses angular signals from services
backend implementation []
    setup client credential flow for spotify on netlify serverless function [X]
    setup firebase authentication []
    setup supabase db []
    save app state in supabase db­[]
    restore app state from supabase db []
containerization : create dockerfile for project [X]
