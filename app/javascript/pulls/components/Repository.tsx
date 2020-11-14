import React from "react";
import { Link } from "react-router-dom";
import { createFragmentContainer, graphql } from "react-relay";
import type { Repository_repository } from "./__generated__/Repository_repository.graphql";
import { MoreHorizontal } from "react-feather";

function Repository({
  repository,
}: {
  repository: Repository_repository;
}): JSX.Element {
  return (
    <div className="level box">
      <div className="level-left code">
        <div className="level-item">
          <strong>{`${repository.owner}/${repository.name}`}</strong>
        </div>
      </div>
      <div className="level-right">
        <div className="level-item">
          <Link
            to={`/repos/${repository.owner}/${repository.name}`}
            className="button"
            title={`${repository.owner}/${repository.name}`}
          >
            <MoreHorizontal />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default createFragmentContainer(Repository, {
  repository: graphql`
    fragment Repository_repository on Repository {
      id
      owner
      name
    }
  `,
});
