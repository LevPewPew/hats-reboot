import React from 'react';
import styled from 'styled-components';

interface SettingsPageProps {
  className?: string;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({ className }) => {
  return (
    <main className={className}>
      <div>SettingsPage PLACEHOLDER</div>
    </main>
  );
};

export default styled(SettingsPage)``;
