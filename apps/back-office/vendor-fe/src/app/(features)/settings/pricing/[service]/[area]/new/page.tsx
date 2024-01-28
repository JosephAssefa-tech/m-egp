'use client';
import { Section } from '@megp/core-fe';
import { FormDetail } from '../_components/form-detail';

export default function GroupPage() {
  return (
    <Section title="New Price" collapsible={false}>
      <FormDetail mode="new" />
    </Section>
  );
}
