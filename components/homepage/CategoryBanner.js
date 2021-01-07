import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { connect } from 'react-redux';

class CategoryBanner extends Component {

  render() {
    const { categories } = this.props;

    return (
      <div className="bg-brand300 py-5 collection-banner">
        <div className="custom-container py-5">
          <p className="font-size-display2 my-3 py-5 text-center font-family-secondary">
            Categories
          </p>

          <div className="row">
            {categories.map((item, index) => (
              <div
                key={`category-item-${index}`}
                className="col-12 col-lg-3 collection-item mb-5"
              >
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

CategoryBanner.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

CategoryBanner.defaultProps = {
  categories: [],
};

export default connect(state => state)(CategoryBanner);
