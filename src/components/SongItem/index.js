import React from "react";
import moment from "moment";
import { Button } from "react-bootstrap";

class SongItem extends React.PureComponent {

  render() {
    const { props: { artworkUrl100, trackName, artistName, collectionName, currency, primaryGenreName, releaseDate, trackPrice, trackTimeMillis } } = this;
    return (
      <tr>
        <td>
          <img src={artworkUrl100}/>
        </td>

        <td>
          <p>{ trackName }</p>
        </td>

        <td>
          <p>{ artistName }</p>
        </td>

        <td>
          <p>{ collectionName }</p>
        </td>

        <td>
          <p>{ moment(releaseDate).format("DD/MM/YYYY") }</p>
        </td>

        <td>
          <p>{ primaryGenreName }</p>
        </td>

        <td>
          <p>{ moment.utc(trackTimeMillis).format("mm:ss") }</p>
        </td>

        <td>
          <p>{ `${trackPrice} ${currency}` }</p>
        </td>

        <td>
          <p><Button bsStyle="primary">View more info</Button></p>
        </td>
      </tr>
    );
  }
}

export default SongItem;