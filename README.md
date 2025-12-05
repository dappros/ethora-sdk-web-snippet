<!-- @format -->

# ethora-sdk-web-snippet

A snippet code sample for integrating an Ethora powered chat screen into internal web portal or dashboard.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Project Structure

- `src/pages/Chat.tsx` - Main chat page component using `@ethora/chatcomponent`
- `src/App.tsx` - Main app component
- `src/main.tsx` - Application entry point

## Usage

The chat component is configured with:

- XMPP provider settings for connecting to Ethora's chat servers
- Test user credentials (replace with JWT login from your dedicated server)
- Room JID format: `userJID_doctorJID@conference.xmpp.ethoradev.com`

## Configuration

The `Chat` component accepts the following props:

### Props

#### `roomJID` (string, required)

The XMPP room JID (Jabber ID) where the chat session will be established.

- **Format**: `userJID_doctorJID@conference.xmpp.ethoradev.com` or `roomJID@conference.xmpp.ethoradev.com`
- **Example**: `646cc8dc96d4a4dc8f7b2f2d_693228d5f05487ee2e332024@conference.xmpp.ethoradev.com`
- **Note**: Replace with proper room JID based on your user and doctor identifiers

#### `user` (object, required)

User authentication credentials. In production, this should come from JWT login response from your dedicated server.

- **Properties**:
  - `email` (string): User's email address
  - `password` (string): User's password
- **Note**: Replace test credentials with actual user data from JWT login

#### `config` (object, required)

Configuration object for the chat component.

##### `config.xmppSettings` (object, required)

XMPP server connection settings for Ethora's chat infrastructure.

- **Properties**:
  - `devServer` (string): WebSocket URL for XMPP connection (e.g., `wss://xmpp.ethoradev.com:5443/ws`)
  - `host` (string): XMPP server hostname (e.g., `xmpp.ethoradev.com`)
  - `conference` (string): Conference/MUC (Multi-User Chat) server domain (e.g., `conference.xmpp.ethoradev.com`)
- **Note**: Update with your dedicated server URLs

##### `config.baseUrl` (string, required)

Base URL for the Ethora API endpoints.

- **Example**: `https://api.ethoradev.com/v1`
- **Note**: Update with your dedicated server API base URL

##### `config.newArch` (boolean, required)

Enables the new architecture features of the chat component.

- **Default**: `true`
- **Purpose**: Activates enhanced chat functionality and improved performance

##### `config.refreshTokens` (object, optional)

Token refresh configuration for maintaining authentication sessions.

- **Properties**:
  - `enabled` (boolean): Whether token refresh is enabled
- **Note**: Required to be enabled (`true`) for media sending functionality

##### `config.disableRooms` (boolean, optional)

Controls whether room functionality is disabled in the chat interface.

- **Default**: `false`
- **Purpose**: Set to `true` to see how the chat looks for patient view (rooms disabled)
- **Note**: Typically set to `false` for full chat functionality

##### `config.disableHeader` (boolean, optional)

Hides the chat header component.

- **Default**: `false`
- **Purpose**: Remove the header bar from the chat interface

##### `config.disableMedia` (boolean, optional)

Disables media file sending capabilities (images, videos, documents).

- **Default**: `false`
- **Purpose**: Restrict chat to text-only messages

##### `config.colors` (object, optional)

Custom color scheme for the chat interface.

- **Properties**:
  - `primary` (string): Primary color (hex, rgb, or named color)
  - `secondary` (string): Secondary color (hex, rgb, or named color)
- **Purpose**: Customize the visual appearance of the chat component

##### `config.googleLogin` (object, optional)

Google authentication integration using Firebase.

- **Properties**:
  - `enabled` (boolean): Enable/disable Google login
  - `firebaseConfig` (FBConfig): Firebase configuration object
- **Purpose**: Allow users to authenticate using Google accounts

##### `config.jwtLogin` (object, optional)

JWT-based authentication configuration.

- **Properties**:
  - `enabled` (boolean): Enable/disable JWT login
  - `token` (string): JWT authentication token
  - `handleBadlogin` (React.ReactElement, optional): Custom component to display on login failure
- **Purpose**: Authenticate users using JSON Web Tokens from your backend

##### `config.userLogin` (object, optional)

Direct user credentials login configuration.

- **Properties**:
  - `enabled` (boolean): Enable/disable user login
  - `user` (User | null): User object with credentials
- **Purpose**: Authenticate using email/password credentials directly

##### `config.customLogin` (object, optional)

Custom authentication function implementation.

- **Properties**:
  - `enabled` (boolean): Enable/disable custom login
  - `loginFunction` (function): Async function that returns User object or null
- **Purpose**: Implement your own authentication logic

##### `config.customAppToken` (string, optional)

Custom application token for API authentication.

- **Purpose**: Provide additional authentication token for API requests

##### `config.defaultLogin` (boolean, optional)

Enables default login behavior.

- **Default**: `false`
- **Purpose**: Use the default login flow provided by the component

##### `config.disableInteractions` (boolean, optional)

Disables all user interactions with the chat (read-only mode).

- **Default**: `false`
- **Purpose**: Create a view-only chat interface

##### `config.chatHeaderBurgerMenu` (boolean, optional)

Shows/hides the burger menu icon in the chat header.

- **Default**: `false`
- **Purpose**: Control visibility of the hamburger menu button

##### `config.forceSetRoom` (boolean, optional)

Forces the room to be set programmatically.

- **Default**: `false`
- **Purpose**: Override automatic room selection

##### `config.roomListStyles` (React.CSSProperties, optional)

Custom CSS styles for the room list component.

- **Purpose**: Style the room list sidebar/panel

##### `config.chatRoomStyles` (React.CSSProperties, optional)

Custom CSS styles for the chat room component.

- **Purpose**: Style the main chat room area

##### `config.setRoomJidInPath` (boolean, optional)

Updates the browser URL path with the current room JID.

- **Default**: `false`
- **Purpose**: Enable deep linking to specific chat rooms

##### `config.disableRoomMenu` (boolean, optional)

Disables the room menu/options.

- **Default**: `false`
- **Purpose**: Hide room-specific menu options

##### `config.defaultRooms` (ConfigRoom[], optional)

Array of default rooms to display.

- **Purpose**: Pre-populate the room list with specific rooms

##### `config.refreshTokens.refreshFunction` (function, optional)

Custom function to refresh authentication tokens.

- **Returns**: Promise resolving to `{ accessToken: string, refreshToken?: string } | null`
- **Purpose**: Implement custom token refresh logic when `refreshTokens.enabled` is `true`

##### `config.backgroundChat` (object, optional)

Custom background styling for the chat interface.

- **Properties**:
  - `color` (string, optional): Background color
  - `image` (string | File, optional): Background image URL or file
- **Purpose**: Customize the chat background appearance

##### `config.bubleMessage` (MessageBubble, optional)

Custom message bubble component configuration.

- **Purpose**: Override default message bubble styling/component

##### `config.headerLogo` (string | React.ReactElement, optional)

Custom logo to display in the chat header.

- **Purpose**: Brand the chat interface with your logo

##### `config.headerMenu` (function, optional)

Callback function for header menu click.

- **Purpose**: Handle custom header menu interactions

##### `config.headerChatMenu` (function, optional)

Callback function for chat menu in header.

- **Purpose**: Handle custom chat menu interactions

##### `config.customRooms` (object, optional)

Configuration for custom room management.

- **Properties**:
  - `rooms` (PartialRoomWithMandatoryKeys[]): Array of custom rooms
  - `disableGetRooms` (boolean, optional): Disable automatic room fetching
  - `singleRoom` (boolean): Whether to show only a single room
- **Purpose**: Provide custom room list instead of fetching from server

##### `config.translates` (object, optional)

Translation/localization configuration.

- **Properties**:
  - `enabled` (boolean): Enable/disable translations
  - `translations` (Iso639_1Codes, optional): Translation object with language codes
- **Purpose**: Support multiple languages in the chat interface

##### `config.disableRoomConfig` (boolean, optional)

Disables room configuration options.

- **Default**: `false`
- **Purpose**: Hide room settings and configuration options

##### `config.disableProfilesInteractions` (boolean, optional)

Disables user profile interactions.

- **Default**: `false`
- **Purpose**: Prevent users from viewing/editing profiles

##### `config.disableUserCount` (boolean, optional)

Hides the user count display in rooms.

- **Default**: `false`
- **Purpose**: Remove user count indicators

##### `config.clearStoreBeforeInit` (boolean, optional)

Clears the application store before initialization.

- **Default**: `false`
- **Purpose**: Reset state when reinitializing the chat component

##### `config.disableSentLogic` (boolean, optional)

Disables the sent message confirmation logic.

- **Default**: `false`
- **Purpose**: Remove sent status indicators from messages

##### `config.initBeforeLoad` (boolean, optional)

Initializes the component before fully loading.

- **Default**: `false`
- **Purpose**: Start initialization process earlier in the component lifecycle

##### `config.qrUrl` (string, optional)

URL for QR code generation/display.

- **Purpose**: Display QR codes in the chat interface

##### `config.secondarySendButton` (object, optional)

Configuration for an additional send button with custom functionality.

- **Properties**:
  - `enabled` (boolean): Enable/disable secondary send button
  - `messageEdit` (string): Text to append/edit when using secondary button
  - `label` (React.ReactNode, optional): Custom label for the button
  - `buttonStyles` (React.CSSProperties, optional): Custom styles for the button
  - `hideInputSendButton` (boolean, optional): Hide the default send button
  - `overwriteEnterClick` (boolean, optional): Override Enter key behavior
- **Purpose**: Add a second send button with different message handling

##### `config.enableRoomsRetry` (object, optional)

Enables retry functionality for failed room loading.

- **Properties**:
  - `enabled` (boolean): Enable/disable retry mechanism
  - `helperText` (string): Text to display when retry is available
- **Purpose**: Provide retry option when room loading fails

##### `config.disableNewChatButton` (boolean, optional)

Hides the "New Chat" button.

- **Default**: `false`
- **Purpose**: Prevent users from creating new chat rooms

##### `config.chatHeaderAdditional` (object, optional)

Adds custom elements to the chat header.

- **Properties**:
  - `enabled` (boolean): Enable/disable additional header elements
  - `element` (any): React element to render in header
- **Purpose**: Extend header functionality with custom components

##### `config.botMessageAutoScroll` (boolean, optional)

Automatically scrolls to bot messages when received.

- **Default**: `false`
- **Purpose**: Ensure bot messages are visible immediately

##### `config.messageTextFilter` (object, optional)

Custom text filtering for messages before sending.

- **Properties**:
  - `enabled` (boolean): Enable/disable text filtering
  - `filterFunction` (function): Function that takes message text and returns filtered text
- **Purpose**: Sanitize, censor, or transform message text

##### `config.eventHandlers` (object, optional)

Event handler callbacks for chat events.

- **Properties**:
  - `onMessageSent` (function, optional): Called when a message is successfully sent
    - Parameters: `{ message: string, roomJID: string, user: any, messageType: 'text' | 'media', metadata?: any }`
  - `onMessageFailed` (function, optional): Called when message sending fails
    - Parameters: `{ message: string, roomJID: string, error: Error, messageType: 'text' | 'media' }`
  - `onMessageEdited` (function, optional): Called when a message is edited
    - Parameters: `{ messageId: string, newMessage: string, roomJID: string, user: any }`
- **Purpose**: Track and handle chat events in your application

##### `config.disableTypingIndicator` (boolean, optional)

Hides the typing indicator when users are typing.

- **Default**: `false`
- **Purpose**: Remove typing status indicators

##### `config.blockMessageSendingWhenProcessing` (boolean | object, optional)

Blocks message sending while a message is being processed.

- **Type**: `boolean` or `object`
- **Object Properties** (when object):
  - `enabled` (boolean): Enable/disable blocking
  - `timeout` (number, optional): Timeout duration in milliseconds
  - `onTimeout` (function, optional): Callback when timeout occurs
- **Purpose**: Prevent sending multiple messages while one is processing

##### `config.customTypingIndicator` (object, optional)

Custom typing indicator component and configuration.

- **Properties**:
  - `enabled` (boolean): Enable/disable custom typing indicator
  - `text` (string | function, optional): Custom text or function returning text based on typing users
  - `position` ('bottom' | 'top' | 'overlay' | 'floating', optional): Position of the indicator
  - `styles` (React.CSSProperties, optional): Custom styles
  - `customComponent` (React.ComponentType, optional): Custom React component for typing indicator
- **Purpose**: Customize the typing indicator appearance and behavior

##### `config.whitelistSystemMessage` (string[], optional)

Array of system message types to display (whitelist).

- **Purpose**: Filter which system messages are shown to users

##### `config.customSystemMessage` (React.ComponentType<MessageProps>, optional)

Custom React component for rendering system messages.

- **Purpose**: Override default system message rendering with custom component

### Example Configuration

```typescript
<Chat
  roomJID="userJID_doctorJID@conference.xmpp.ethoradev.com"
  config={{
    xmppSettings: {
      devServer: "wss://xmpp.ethoradev.com:5443/ws",
      host: "xmpp.ethoradev.com",
      conference: "conference.xmpp.ethoradev.com",
    },
    baseUrl: "https://api.ethoradev.com/v1",
    newArch: true,
    refreshTokens: { enabled: true },
    disableRooms: false,
  }}
  user={{
    email: "user@example.com",
    password: "userpassword",
  }}
/>
```
