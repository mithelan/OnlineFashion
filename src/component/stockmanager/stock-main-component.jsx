import React, { Component } from "react";
import HomeStock from "./homeStock";
import CategoryProduct from "./category-product.component";

export default class StockMain extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementById("table").style.display = "none";
    document.getElementById("category").style.display = "block";
  }

  // display only table view on button click
  showTable() {
    document.getElementById("table").style.display = "block";
    document.getElementById("category").style.display = "none";
  }
  // end of display only table view on button click

  // display only category view on button click
  showCategory() {
    document.getElementById("table").style.display = "none";
    document.getElementById("category").style.display = "block";
  }
  // end of display only category view on button click

  render() {
    return (
      <div>
        <h1>Stock Management</h1>

        {/* button to select the view type  */}
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4">
            <button onClick={this.showTable}>Table View</button>
            <button onClick={this.showCategory}>Category View</button>
          </div>
        </div>
        {/* end of button to select the view type  */}

        {/* hidden element to show table view  */}
        <div id="table">
          <HomeStock />
        </div>
        {/* // end of hiddem element to show table view  */}

        {/* // hidden element show category view  */}
        <div id="category">
          <CategoryProduct />
        </div>
        {/* // end of hidden element to show category view  */}
      </div>
    );
  }
}
