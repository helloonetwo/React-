import React, { Component,Fragment } from 'react';
class TodeList extends Component {
  render() {
    return (
      <Fragment >
          <div>
             <input/><button>提交</button>
          </div>
          <ul>
             <li>vue</li>
             <li>react</li>
             <li>angular  </li>
          </ul>
      </Fragment >
    );
  }
}

export default TodeList;
