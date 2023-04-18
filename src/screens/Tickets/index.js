import React from 'react';
import VirtualizedView from '../../components/VirtualizedView';
import Titling from '../../components/Titling';
import TicketList from './atoms/TicketList';

const Tickets = () => {
  return (
    <VirtualizedView containerStyle={{paddingHorizontal: 20}}>
      <Titling
        title="Ticket Detail"
        titleSize="large"
        subtitle="Some details of your orders"
        style={{paddingBottom: 20}}
      />
      <TicketList />
    </VirtualizedView>
  );
};

export default Tickets;
