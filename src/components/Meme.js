import React from "react";

export default function Meme({ userData, addVoteHandler, removeVoteHandler }) {
  const data = userData.map((meme, i) => (
    <div className="col-md-8" key={i}>
      <div className="card mt-4">
        <h3 className="card-title text-center">{meme.title}</h3>
        <h6 className="card-subtitle mb-2 text-muted">{meme.category}</h6>
        <img src={meme.image} alt={meme.description} loading="lazy" />
        <div className="card-body">
          Points: {meme.votes}
          <div className="card-footer">
            <button
              className="btn btn-success"
              onClick={() => addVoteHandler(meme)}
            >
              Like
            </button>
            <button
              className="btn btn-danger"
              onClick={() => removeVoteHandler(meme)}
            >
              DisLike
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  return data;
}
