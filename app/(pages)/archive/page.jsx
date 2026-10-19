// Archive page — composes section components in order.
// Past Events, Milestones and Community are fed from the CMS; each falls back to local data.

import ArchiveHeader from "../../components/ArchiveHeader/ArchiveHeader";
import WugBanner from "../../components/WugBanner/WugBanner";
import PastEvents from "../../components/PastEvents/PastEvents";
import Milestones from "../../components/Milestones/Milestones";
import PastPresentations from "../../components/PastPresentations/PastPresentations";
import Community from "../../components/Community/Community";
import { PAST_EVENTS } from "../../../data/PastEventsData";
import { MILESTONES } from "../../../data/MilestonesData";
import { COMMUNITY_POSTS } from "../../../data/CommunityData";
import styles from "./page.module.scss";

export const dynamic = "force-dynamic";

async function getEvents() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/events?_published=true`,
      { next: { tags: ["cms"] } }
    );
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      return PAST_EVENTS;
    }
    const parsedData = data.body.map((event) => {
      return {
        id: event._id,
        title: event._name,
        date: event.date,
        description: event.description,
        image: event.photo?.[0]?.src,
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch events: ${e.message}`);
    return PAST_EVENTS;
  }
}

async function getStats() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/club_stats?_published=true`,
      { next: { tags: ["cms"] } }
    );
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      return MILESTONES;
    }
    const parsedData = data.body.map((stat) => {
      return {
        id: stat._id,
        label: stat.label,
        value: stat.value,
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch club_stats: ${e.message}`);
    return MILESTONES;
  }
}

async function getCommunityPosts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/community?_published=true`,
      { next: { tags: ["cms"] } }
    );
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      return COMMUNITY_POSTS;
    }
    const parsedData = data.body.map((post) => {
      return {
        id: post._id,
        photo: post.photo?.[0]?.src,
        date: post.date,
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch community: ${e.message}`);
    return COMMUNITY_POSTS;
  }
}

export default async function ArchivePage() {
  const [events, stats, communityPosts] = await Promise.all([
    getEvents(),
    getStats(),
    getCommunityPosts(),
  ]);

  return (
    <main className={styles.page}>
      <ArchiveHeader />
      <WugBanner />
      <PastEvents events={events} />
      <Milestones stats={stats} />
      <PastPresentations />
      <Community posts={communityPosts} />
    </main>
  );
}
