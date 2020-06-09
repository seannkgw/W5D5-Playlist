import React from "react";
import Header from "./components/Header";
import TrackForm from "./components/TrackForm";
import TrackList from "./components/TrackList";
import Categorize from "./components/Category";

class TrackOverview extends React.Component {

    constructor(props) {
        super(props)
        this.state =
        {
            tracks: [
                {id: 1, trackTitle: "We Stayed Up All Night", artist: "Tourist", genre: "Electronic", rating: 5},
                {id: 2, trackTitle: "Ölli Ölli", artist: "Bete", genre: "Electronic", rating: 2},
                {id: 3, trackTitle: "Rain On Me", artist: "lady Gaga ft. Ariana Grande", genre: "Pop", rating: 3},
                {id: 4, trackTitle: "Upside Down", artist: "Diana Ross", genre: "Soul", rating: 2},
                {id: 5, trackTitle: "Juice", artist: "Lizzo", genre: "Pop", rating: 1},
                {id: 6, trackTitle: "Ain't Nobdy", artist: "Chaka Khan", genre: "Soul", rating: 5},
                {id: 7, trackTitle: "One Line", artist: "OTHERLiiNE", genre: "Electronic", rating: 4},
                {id: 8, trackTitle: "Atlas", artist: "Bicep", genre: "Electronic", rating: 5},
                {id: 9, trackTitle: "Con Altura", artist: "Rosalia", genre: "Pop", rating: 2},
                {id: 10, trackTitle: "Hello", artist: "Lionel Richie", genre: "Soul", rating: 3}
            ]
        }

    }

    render() {

        const addTrack = (track) => {
            const generateId = this.state.tracks.length + 1;
            const newTrack = {
                id: generateId,
                trackTitle: track.trackTitle,
                artist: track.artist,
                genre: track.genre,
                rating: track.rating
            };

            this.setState(prevState => {
                const updatedTracks = prevState.tracks.concat(newTrack);
                return {
                    tracks: updatedTracks
                };
            });
        };

        const sortTitles = () => {
            const sortedByTrackTitle = [...this.state.tracks].sort(function (a, b) {
                if (a.trackTitle < b.trackTitle) return -1;
                else if (a.trackTitle > b.trackTitle) return 1;
                return 0;
            });

            this.setState({
                tracks: sortedByTrackTitle
            })
        }

        const sortArtist = () => {
            const sortedByArtist = [...this.state.tracks].sort(function (a, b) {
                if (a.artist < b.artist) return -1;
                else if (a.artist > b.artist) return 1;
                return 0;
            });

            this.setState({
                tracks: sortedByArtist
            })
        }

        const sortGenre = () => {
            const sortedByGenre = [...this.state.tracks].sort(function (a, b) {
                if (a.genre < b.genre) return -1;
                else if (a.genre > b.genre) return 1;
                return 0;
            });

            this.setState({
                tracks: sortedByGenre
            })
        }

        const sortRating = () => {
            const sortedByRating = [...this.state.tracks].sort(function (a, b) {
                if (a.rating < b.rating) return 1;
                else if (a.rating > b.rating) return -1;
                return 0;
            });

            this.setState({
                tracks: sortedByRating
            });
        };

        const deleteTrack = (event) => {
            const titleOfTrackToDelete = event.target.getAttribute("value");
            const newArrayOfTracks = this.state.tracks.filter(track => track.trackTitle !== titleOfTrackToDelete).map(track => { return track });
            this.setState({
                tracks: newArrayOfTracks
            })
        };   

    return(
            <div className="container">
                <Header tracks={this.state.tracks}/>
                <div className="tracks">
                    <TrackForm addTrack={addTrack} />
                    <div className="trackHeader">
                        <div className="track-row__item" onClick={sortTitles}>Title ▼</div>
                        <div className="track-row__item" onClick={sortArtist}>Artist ▼</div>
                        <div className="track-row__item" onClick={sortGenre}>Genre ▼</div>
                        <div className="track-row__item" onClick={sortRating}>Rating ▼</div>
                        <div className="track-row_item" onClick={deleteTrack}></div>
                    </div>
                    <TrackList tracks={this.state.tracks} deleteTrack={deleteTrack} />
                </div>
                <Categorize tracks={this.state.tracks} />
            </div >
        );
    };
};

export default TrackOverview;