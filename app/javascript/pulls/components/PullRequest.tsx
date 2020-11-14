import React from "react";
import { MoreHorizontal } from "react-feather";
import { createFragmentContainer, graphql } from "react-relay";
import { Link } from "react-router-dom";
import type { PullRequest_pullRequest } from "./__generated__/PullRequest_pullRequest.graphql";

function PullRequest({
  pullRequest: { number, repository, status },
}: {
  pullRequest: PullRequest_pullRequest;
}): JSX.Element {
  return (
    <div className="level box">
      <div className="level-left code">
        <div className="level-item">
          <strong>{`${repository}#${number}`}</strong>
        </div>
        <div className="level-item">{status}</div>
      </div>
      <div className="level-right">
        <div className="level-item">
          <Link
            to={`/repos/${repository}/pull/${number}`}
            className="button"
            title={`${repository}#${number}`}
          >
            <MoreHorizontal />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default createFragmentContainer(PullRequest, {
  pullRequest: graphql`
    fragment PullRequest_pullRequest on PullRequest {
      id
      repository
      number
      status
    }
  `,
});
