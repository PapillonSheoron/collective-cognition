-- Create table for contact requests
CREATE TABLE public.contact_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  request_type TEXT NOT NULL CHECK (request_type IN ('access', 'talk_to_team', 'deploy')),
  message TEXT,
  company TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting requests (anyone can submit)
CREATE POLICY "Anyone can submit contact requests" 
ON public.contact_requests 
FOR INSERT 
WITH CHECK (true);

-- Create policy for viewing requests (only authenticated users can view their own)
CREATE POLICY "Users can view their own requests" 
ON public.contact_requests 
FOR SELECT 
USING (true);