import React from 'react';

export default function Pagination() {
  return (
    <ul className="uk-pagination uk-flex-center uk-flex-middle" data-uk-margin>
      <li>
        <a href="#"><span data-uk-pagination-previous></span></a>
      </li>
      <li><a href="#">1</a></li>
      {/* <!-- <li className="uk-disabled"><span>...</span></li> --> */}
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li className="uk-active"><span>4</span></li>
      <li><a href="#">5</a></li>
      <li>
        <a href="#"><span data-uk-pagination-next></span></a>
      </li>
    </ul>
  );
}
