import React from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import { H3 } from 'components/typography';
import { Hr, SearchItem, Anchor, Paragraph } from './SearchResultStyledComps';

const ListItem = ({ data, index, style }) => {
    const { repoList } = data;
    const rowData = repoList[index];
    if (!rowData || _isEmpty(rowData)) {
        return null;
    }
    return (
        <SearchItem key={rowData.id} style={style}>
            <Hr index={index} />
            <H3>
                <Anchor href={rowData.html_url}>
                    {`${rowData.owner.login}/`}
                    <em>{rowData.name}</em>
                </Anchor>
            </H3>
            <Paragraph className="text-overflow-ellipsis">
                {rowData.description}
            </Paragraph>
        </SearchItem>
    );
};

ListItem.propTypes = {
    data: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired
};

export default ListItem;
