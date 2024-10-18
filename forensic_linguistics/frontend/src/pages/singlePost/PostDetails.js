import { Link } from "react-router-dom";
import "./singlePost.css";
import React from "react";

export default function PostDetails() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={require("../../assets/compressed_img-uE7YZ0VK5fu8B7DZamxGd7tG.png")} // Use require to load the image
          alt="" // Provide meaningful alt text
        />
        <h1 className="singlePostTitle">
          Forensic Linguistics
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Tom Grant
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          Linguistic Deception Detection DD is a well-established part of
          forensic linguistics and an area that continues to attract attention
          on the part of researchers, self-styled experts, and the public at
          large. In this article, the various approaches to DD within the
          general field of linguistics are examined. The basic method is to
          treat language as a form of behaviour and to equate marked linguistic
          behaviour with other marked forms of behaviour. Such a comparison has
          been identified in other fields such as psychology and kinesics as
          being associated with stress linked to the attempt to deceive,
          typically in such contexts as examined here. Representative authentic
          examples of some of the most common linguistic indicators of deception
          that have been identified are discussed, dividing them into two
          general categories which we here introduce: language as revealer and
          language as concealer. We will argue that linguistic analysis for DD
          should be conducted relative to the subject’s individual linguistic
          patterns of behaviour, not on absolutes related to broad
          generalisations about what is supposedly normal or unmarked in the
          population at large. We will also briefly discuss some structured
          methods for linguistic analysis for DD and the prospect that
          technology and artificial intelligence will provide the means to
          automate and digitalise the linguistic DD process. We maintain that
          caution is advisable when considering these, as DD will, in all
          probability, always remain a work in progress, with the need for a
          flexible human evaluator ready to take into account many different
          aspects of the individual subject and the case in question.
          <br />
          <br />
          The fascination of Deception Detection (DD) to both expert and
          nonexpert lies in the prospect that there may exist proven techniques
          to spot when someone is being deceptive.4 Language can be seen on one
          level as an aspect of human behaviour.5 In the same way that a
          person’s body language may reveal their innermost thoughts, the words
          that someone uses (or avoids), how they respond (or fail to respond)
          to certain linguistic prompts, and the way that they structure their
          discourse (the weight they give to certain aspects, as well as those
          aspects that they neglect to mention or pass quickly over) can all be
          used as indicators of how truthful or sincere they are being.
        </p>
      </div>
    </div>
  );
}
