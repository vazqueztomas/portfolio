
/* eslint-disable react/prop-types */

import { AnimateSharedLayout } from 'framer-motion';
import React, { useState } from 'react';
import CompactWork from './works/CompactWork';
import Content from './works/Content';
import ExpandedWork from './works/ExpandendWork';
import styled from 'styled-components';

const Container = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  margin-left: 1rem;
  margin-right: 1rem;
`;

function WorkCard({ item, onCollapse, onExpand, disabled }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const collapseDate = () => {
    setIsExpanded(false);
    onCollapse();
  };

  const expandDate = () => {
    setIsExpanded(true);
    onExpand();
  };

  return (
    <Container>
      <AnimateSharedLayout>
        {isExpanded ? (
          <ExpandedWork onCollapse={collapseDate} item={item}>
            <Content item={item} disabled={disabled} />
          </ExpandedWork>
        ) : (
          <CompactWork onExpand={expandDate} disabled={disabled} item={item}>
            <Content item={item} disabled={disabled} />
          </CompactWork>
        )}
      </AnimateSharedLayout>
    </Container>
  );
}

export default WorkCard;
