-- Seed Data for Formed Rwanda
-- This provides initial data for testing and development

-- Insert site settings
INSERT INTO public.site_settings (key, value, description) VALUES
  ('site_name', '"Formed Rwanda"', 'Organization name'),
  ('site_tagline', '"Spreading the Gospel, Transforming Lives"', 'Site tagline'),
  ('contact_email', '"info@formedrwanda.org"', 'Primary contact email'),
  ('contact_phone', '"+250 788 123 456"', 'Primary contact phone'),
  ('momo_pay_number', '"250788123456"', 'MoMo Pay number for donations'),
  ('momo_pay_name', '"Formed Rwanda"', 'MoMo Pay account name'),
  ('social_facebook', '"https://facebook.com/formedrwanda"', 'Facebook page URL'),
  ('social_instagram', '"https://instagram.com/formedrwanda"', 'Instagram profile URL'),
  ('social_twitter', '"https://twitter.com/formedrwanda"', 'Twitter profile URL'),
  ('social_youtube', '"https://youtube.com/@formedrwanda"', 'YouTube channel URL')
ON CONFLICT (key) DO NOTHING;

-- Insert sample gospel content
INSERT INTO public.gospel_content (title, slug, content, excerpt, category, scripture_reference, is_published, published_at) VALUES
  (
    'The Power of Generosity',
    'the-power-of-generosity',
    'Generosity is not just about giving money; it is about giving from the heart. When we give generously, we reflect the character of God who gave His only Son for us. The Bible teaches us in Proverbs 22:9 that "The generous will themselves be blessed, for they share their food with the poor." This principle shows us that blessing flows through generosity. As we give to others, God opens doors of blessing in our own lives. Let us cultivate hearts of generosity, knowing that we cannot out-give God.',
    'Discover how generosity transforms lives and brings blessings according to Proverbs 22:9',
    'teaching',
    'Proverbs 22:9',
    true,
    NOW()
  ),
  (
    'Walking in Faith Daily',
    'walking-in-faith-daily',
    'Faith is not a one-time decision but a daily walk with God. Every morning presents new opportunities to trust Him, to lean on His promises, and to step out in obedience. Hebrews 11:6 reminds us that "without faith it is impossible to please God." Our daily walk of faith involves reading His Word, praying without ceasing, and trusting His guidance even when we cannot see the path ahead. Let us commit to walking by faith and not by sight.',
    'Learn how to maintain a daily walk of faith that pleases God',
    'devotional',
    'Hebrews 11:6',
    true,
    NOW()
  ),
  (
    'From Darkness to Light',
    'from-darkness-to-light',
    'My life was filled with darkness and despair until I encountered Jesus Christ. I was struggling with addiction and felt hopeless. But when I heard the gospel message at a Formed Rwanda outreach event, something changed in my heart. I gave my life to Christ, and He transformed me completely. Today, I am free from addiction, restored in my relationships, and filled with purpose. God truly brings light into the darkest situations.',
    'A powerful testimony of transformation through Christ',
    'testimony',
    '2 Corinthians 5:17',
    true,
    NOW()
  ),
  (
    'The Gospel of Grace',
    'the-gospel-of-grace',
    'Grace is the unmerited favor of God. We cannot earn it, we do not deserve it, but God freely gives it to us through Jesus Christ. Ephesians 2:8-9 declares, "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast." Understanding grace changes everything. It frees us from the burden of trying to earn God''s love and allows us to rest in His finished work on the cross.',
    'Understanding the transformative power of God''s grace',
    'sermon',
    'Ephesians 2:8-9',
    true,
    NOW()
  )
ON CONFLICT (slug) DO NOTHING;

-- Insert sample events
INSERT INTO public.events (title, slug, description, location, event_date, end_date, event_type, max_attendees, is_published) VALUES
  (
    'Community Gospel Outreach',
    'community-gospel-outreach-2025',
    'Join us for a powerful gospel outreach in the heart of Kigali. We will be sharing the good news, praying for the sick, and distributing food to those in need. This is an opportunity to see God move in our community and be part of His work.',
    'Kigali City Center, Rwanda',
    NOW() + INTERVAL '14 days',
    NOW() + INTERVAL '14 days' + INTERVAL '4 hours',
    'outreach',
    200,
    true
  ),
  (
    'Prayer and Fasting Week',
    'prayer-fasting-week-2025',
    'A dedicated week of prayer and fasting for spiritual breakthrough, revival in Rwanda, and God''s guidance for our ministry. Join us each evening for corporate prayer sessions.',
    'Formed Rwanda Office, Kigali',
    NOW() + INTERVAL '21 days',
    NOW() + INTERVAL '28 days',
    'prayer',
    50,
    true
  ),
  (
    'Faith and Finance Workshop',
    'faith-finance-workshop',
    'Learn biblical principles of stewardship, generosity, and financial management. This workshop will equip you with practical tools to honor God with your finances and experience His provision.',
    'Kigali Convention Centre',
    NOW() + INTERVAL '35 days',
    NOW() + INTERVAL '35 days' + INTERVAL '6 hours',
    'workshop',
    100,
    true
  )
ON CONFLICT (slug) DO NOTHING;

-- Insert sample testimonies
INSERT INTO public.testimonies (full_name, email, testimony, category, is_approved, is_featured, approved_at) VALUES
  (
    'Jean Claude Mugabo',
    'jc.mugabo@example.com',
    'I was healed from a chronic illness after the prayer team from Formed Rwanda visited my home. Doctors had given up hope, but God had the final word. Today I am completely healed and serving in the ministry!',
    'healing',
    true,
    true,
    NOW()
  ),
  (
    'Grace Uwase',
    'grace.uwase@example.com',
    'I gave my life to Christ during the community outreach last year. Since then, my entire family has come to know Jesus. God has restored our home and filled it with peace and joy.',
    'salvation',
    true,
    true,
    NOW()
  ),
  (
    'Patrick Niyonzima',
    'patrick.n@example.com',
    'When I lost my job, I didn''t know how I would provide for my family. The church prayed with me, and within two weeks, God opened a door to an even better opportunity. His provision is real!',
    'provision',
    true,
    false,
    NOW()
  )
ON CONFLICT DO NOTHING;
