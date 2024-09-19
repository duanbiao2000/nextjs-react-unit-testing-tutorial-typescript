import { UserProfile } from '@/components/UserProfile';
import { render, screen } from '@testing-library/react';

// Begin test suite for UserProfile component rendering
describe('UserProfile - Rendering', () => {
  // Test: When email is verified, the text "Email Verified" should appear
  it('should have text Email Verified when isEmailVerified is true', () => {
    render(
      <UserProfile
        displayName="Anson The Developer"
        username="ansonthedev"
        email="ansonthedev@ansonthedev.com"
        isEmailVerified={true}
      />
    );
    expect(screen.getByText('Email Verified')).toBeInTheDocument();
  });

  // Test: When email is not verified, the text "Email Not Verified" should appear
  it('should have text Email Not Verified when isEmailVerified is false', () => {
    render(
      <UserProfile
        displayName="Anson The Developer"
        username="ansonthedev"
        email="ansonthedev@ansonthedev.com"
        isEmailVerified={false}
      />
    );
    expect(screen.queryByText('Email Verified')).not.toBeInTheDocument();
    expect(screen.getByText('Email Not Verified')).toBeInTheDocument();
  });

  // Test: Display name should end with three dots when its length exceeds 30 characters
  it('should have display name end with three dots when length is greater than 30 characters', () => {
    render(
      <UserProfile
        displayName="Anson The Developer Anson The Developer Anson The Developer Anson The Developer"
        username="ansonthedev"
        email="ansonthedev@ansonthedev.com"
        isEmailVerified={false}
      />
    );
    const displayNameSpanElement = screen.getByText(/Display Name: /);
    expect(displayNameSpanElement).toHaveTextContent(/.*\.\.\./);
  });

  // Test: Display name should not end with three dots when its length is less than 30 characters
  it('should not have three dots at end of display name when less than 30 characters', () => {
    render(
      <UserProfile
        displayName="Anson"
        username="ansonthedev"
        email="ansonthedev@ansonthedev.com"
        isEmailVerified={false}
      />
    );
    const displayNameSpanElement = screen.getByText(/Display Name: /);
    expect(displayNameSpanElement).not.toHaveTextContent(/.*\.\.\./);
  });
});