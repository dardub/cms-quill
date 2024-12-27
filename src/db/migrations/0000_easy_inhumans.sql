CREATE TABLE `deployments` (
	`id` integer PRIMARY KEY NOT NULL,
	`commit` text NOT NULL,
	`site_id` integer NOT NULL,
	FOREIGN KEY (`site_id`) REFERENCES `sites`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `orgs` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`slug` text
);
--> statement-breakpoint
CREATE TABLE `roles` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`create_user` integer,
	`create_site` integer,
	`manage_user` integer,
	`manage_site` integer,
	`delete_user` integer,
	`delete_site` integer
);
--> statement-breakpoint
CREATE TABLE `sites` (
	`id` integer PRIMARY KEY NOT NULL,
	`org_id` integer NOT NULL,
	`github_repo` text,
	`slug` text NOT NULL,
	`domain` text,
	FOREIGN KEY (`org_id`) REFERENCES `orgs`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`org_id` integer NOT NULL,
	`email` text NOT NULL,
	`password` text,
	`github_handle` text,
	`role_id` integer NOT NULL,
	FOREIGN KEY (`org_id`) REFERENCES `orgs`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `orgs_slug_unique` ON `orgs` (`slug`);--> statement-breakpoint
CREATE UNIQUE INDEX `roles_name_unique` ON `roles` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `sites_slug_unique` ON `sites` (`slug`);--> statement-breakpoint
CREATE UNIQUE INDEX `sites_domain_unique` ON `sites` (`domain`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_github_handle_unique` ON `users` (`github_handle`);