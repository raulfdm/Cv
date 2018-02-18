import React from 'react';
import styled from 'styled-components';
import { SectionTitle, SectionBody, Section } from '../Section';
import interests from '../../globals/data/interest';

const InterestItem = styled.p`
  ::before {
    content: '• ';
  }
`;

export default () => {
  return (
    <Section>
      <SectionTitle title="Interest" />
      <SectionBody>
        {interests.map((interest, index) => (
          <InterestItem key={interest + index}>{interest}</InterestItem>
        ))}
      </SectionBody>
    </Section>
  );
};
